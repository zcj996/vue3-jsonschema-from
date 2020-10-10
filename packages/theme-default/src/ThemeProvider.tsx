import { ThemeProvider, Theme } from 'vue3-jsonschema-form'
import { SetupContext, PropType } from 'vue'

import Form from './Form'
import Header from './Header'
import SingleTypeArrayWrapper from './SingleTypeArrayWrapper'

import TextWidget from './widgets/TextWidget'
import TextareaWidget from './widgets/TextareaWidget'
import CheckboxesWidget from './widgets/CheckboxesWidget'
import RadioWidget from './widgets/RadioWidget'
import SelectWidget from './widgets/SelectWidget'
import NumberWidget from './widgets/NumberWidget'

import { ThemeProvider as StyleThemeProvide } from './style-theme'

export const widgets = {
  TextWidget,
  TextareaWidget,
  CheckboxWidget: TextWidget,
  CheckboxesWidget,
  RadioWidget,
  SelectWidget,
  HiddenWidget: TextWidget,
  PasswordWidget: TextWidget,
  EmailWidget: TextWidget,
  URLWidget: TextWidget,
  DateWidget: TextWidget,
  DateTimeWidget: TextWidget,
  ColorWidget: TextWidget,
  RangeWidget: TextWidget,
  NumberWidget,
}

export const layouts = {
  Form,
  Header,
  SingleTypeArrayWrapper: SingleTypeArrayWrapper,
}

export const theme: Theme = {
  widgets,
  layouts,
}

interface Props<T> {
  theme?: Theme
  styleTheme?: T
}

function VjsfDefaultThemeProvider<T>(props: Props<T>, { slots }: SetupContext) {
  return (
    <StyleThemeProvide>
      <ThemeProvider theme={theme}>
        {slots.default && slots.default()}
      </ThemeProvider>
    </StyleThemeProvide>
  )
}

VjsfDefaultThemeProvider.props = {
  theme: {
    type: Object as PropType<Theme>,
  },
  styleTheme: {
    type: Object,
  },
}

export default VjsfDefaultThemeProvider