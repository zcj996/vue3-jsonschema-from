declare const _default: import("vue").DefineComponent<{
    readonly title: {
        readonly type: import("vue").PropType<string>;
        readonly required: true;
    };
    readonly errors: {
        readonly type: import("vue").PropType<string[]>;
    };
    readonly options: {
        readonly type: import("vue").PropType<import("../types").WidgetOptions>;
        readonly required: true;
    };
    readonly id: {
        readonly type: import("vue").PropType<string>;
        readonly required: true;
    };
    readonly path: {
        readonly type: import("vue").PropType<string>;
        readonly required: true;
    };
    readonly value: {
        readonly required: true;
    };
    readonly schema: {
        readonly type: import("vue").PropType<import("../types").Schema>;
        readonly required: true;
    };
    readonly rootSchema: {
        readonly type: import("vue").PropType<import("../types").Schema>;
        readonly required: true;
    };
    readonly uiSchema: {
        readonly type: import("vue").PropType<import("../types").UISchema>;
        readonly required: true;
    };
    readonly onChange: {
        readonly type: import("vue").PropType<(value: any) => void>;
        readonly required: true;
    };
    readonly required: {
        readonly type: import("vue").PropType<boolean>;
        readonly required: true;
    };
    readonly isDependenciesKey: {
        readonly type: import("vue").PropType<boolean>;
        readonly required: true;
    };
    readonly errorSchema: {
        readonly type: import("vue").PropType<any>;
        readonly required: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    required: boolean;
    title: string;
    path: string;
    value: unknown;
    id: string;
    options: import("../types").WidgetOptions;
    onChange: (value: any) => void;
    schema: import("../types").Schema;
    rootSchema: import("../types").Schema;
    uiSchema: import("../types").UISchema;
    isDependenciesKey: boolean;
    errorSchema: unknown;
} & {
    errors?: string[] | undefined;
}>, {}>;
export default _default;