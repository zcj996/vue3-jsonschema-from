import { defineComponent, PropType, ref, watch } from 'vue'
import { createUseStyles } from 'vue-jss'
import { CommonRendererPropsDefine } from '../../types'
import { Schema } from 'vue3-jsonschema-form'
import { renderItem } from '../../utils'

const useStyles = createUseStyles({
  select: {
    width: '100%',
    outline: 'none',
    padding: 7,
    borderRadius: 3,
    border: '1px solid #dedede',
  },
  option: {
    padding: 10,
  },
})

const Selection = defineComponent({
  name: 'Selection',
  props: {
    options: {
      type: Array as PropType<
        {
          key: string | number
          value: string | number
        }[]
      >,
      required: true,
    },
    value: {
      type: [Array, Number, String, Object] as PropType<any[] | any>,
      // required: true,
    },
    onChange: {
      type: Function as PropType<(v: any) => void>,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    multiple: {
      type: Boolean,
    },
  },
  setup(props) {
    const classesRef = useStyles()

    /**
     * because `selected={bool}` not work correctly
     * so we chose `v-model` to make this simple
     */
    const currentValueRef = ref(props.value)

    watch(currentValueRef, v => {
      if (v !== props.value) {
        props.onChange(v)
      }
    })

    watch(
      () => props.value,
      v => {
        if (v !== currentValueRef.value) {
          currentValueRef.value = v
        }
      },
    )

    return () => {
      const { id, options, multiple } = props
      const classes = classesRef.value
      return (
        <select
          id={id}
          multiple={multiple}
          class={classes.select}
          v-model={currentValueRef.value}
        >
          {options.map((o, index) => (
            <option value={o.value} class={classes.option} key={index}>
              {o.key}
            </option>
          ))}
        </select>
      )
    }
  },
})

function getEnumOptions(schema: Schema) {
  if (schema.enumKeyValue) return schema.enumKeyValue
  if (schema.enum) return schema.enum.map(k => ({ key: k, value: k }))
  return []
}

export function withCommonSelection(Comp: any) {
  return defineComponent({
    name: 'WithSelectionWrapper',
    props: CommonRendererPropsDefine,
    setup(props) {
      return () => {
        const { schema, uiSchema, onChange, value } = props

        const widget = uiSchema && uiSchema.widget

        if (
          schema &&
          (schema.enum || schema.enumKeyValue) &&
          (!widget || widget === 'selection')
        ) {
          // render selection
          const options = getEnumOptions(schema)

          return renderItem(props, id => (
            <Selection
              options={options}
              onChange={onChange}
              value={value as any}
              id={id}
              multiple={false}
            />
          ))
        }

        return <Comp {...props} />
      }
    },
  })
}

export default Selection
