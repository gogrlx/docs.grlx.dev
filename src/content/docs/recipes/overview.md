---
title: Overview
description: An overview of grlx recipes
---
Recipes are the core of grlx functionality, providing a structured way for developers to deploy actions to sprouts. Recipes are a collection of ingredients which can be executed against a sprout. Recipes must be placed on the farmer at `/srv/grlx/recipes/prod` (with support for other non-prod environments in the future). Furthermore, recipes can utilize [Go's builtin templating engine](https://pkg.go.dev/text/template) to provide dynamic functionality for deployment. Below is a simple example of the makeup of a recipe.
```yaml
include:
  - .super-sprout-steps
steps:
{{ if eq (props hostname) super-sprout }}
  install super-sprout:
    file.touch:
      - name: ~/super-sprout-config
    requisites:
      - require: super-sprout-steps-completed
{{ else }}
  install normal-sprout:
    file.touch:
      - name: ~/normal-sprout-config
{{ end }}
```
In this example, an include is created for a `super-sprout-steps.grlx` file. This file would contain a list of steps with a final step `grlx-sprout-steps-completed`. Next we have our list of steps, bounded by Go templates. This template checks the hostname of the sprout and renders the steps to send to the farmer. In this case, if the sprout's hostname is `super-sprout`, then it will render a template that looks like this:
```yaml
include:
  - .super-sprout-steps
steps:
  install super-sprout:
    file.touch:
      - name: ~/super-sprout-config
    requisites:
      - require: super-sprout-steps-completed
```
If the hostname is anything else, the sprout will run:
```yaml
include:
  - .super-sprout-steps
steps:
  install normal-sprout:
    file.touch:
      - name: ~/normal-sprout-config
```

It is important to note the requisites listed. This ensures that the step from the include (`super-sprout-steps-completed`) occurs _before_ the `install-super-sprout` step is run. 
:::note
Deployment of recipe steps is non-deterministic unless requisites are provided. Otherwise, are steps run as is. If order is important, then requisites ***must*** be specified.
:::

Once you create a recipe, you can run it using `grlx cook <name> -T <list of sprouts or \* for all sprouts>`. In the case of the example above, I might run something like `grlx cook example -T \*` to run the above on all sprouts. You could also run `grlx cook example -T \* --out json` to get a json output of running this recipe against sprouts.
