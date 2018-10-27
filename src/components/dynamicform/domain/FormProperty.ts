import { DFSchema } from './../schema/DfSchema';
import { DFUISchemaItem } from './../schema/UiSchema';

// tslint:disable:variable-name
export default class FormProperty {
    public formData: any = {};

    private _formSchem: DFSchema = {};
    private _uiSchema: DFUISchemaItem = {};
    private _propertyId: string = '' ;

    constructor(propertyId: string , formSchema: DFSchema, uiSchema: DFUISchemaItem) {
        this._propertyId = propertyId;
        /*
        this._id = id;
        this._fieldKey = fieldKey;
        this._formData = formdata;
        this._attrs = attrs;
        this._visiable = visiable;
        this._title = title;
        */
        this._formSchem = formSchema;
        this._uiSchema = uiSchema;
    }

    get key(): string {
        return this._propertyId;
    }

    get id(): string {
        return `$$${this._propertyId}`;
    }

    get formSchema(): DFSchema {
        if (this._formSchem == null) {
            return {};
        }
        return this._formSchem;
    }

    get uiSchema(): DFUISchemaItem {
        if (this._uiSchema == null) {
            return {};
        }
        return this._uiSchema;
    }

    get type() {
        return this.uiSchema.widget || this.formSchema.type;
    }

    get formitemAttrs() {
        const attrs = this.ui.itemattrs;
        attrs.fieldDecoratorId = this.key;
        return attrs;
    }

    get widgetAttrs() {
        return this.ui.widgetattrs;
    }

    get ui(): any {
        const propertyUi: any = this.formSchema.ui;
        const ui = {
            ...propertyUi,
            ...this.uiSchema,
        };
        return ui;
    }

    get label(): string {
        if (this.formSchema.title) {
            return this.formSchema.title;
        }
        if (this.uiSchema.widgetattrs && this.uiSchema.widgetattrs.label) {
            return this.uiSchema.widgetattrs.label;
        }
        return this.key;
    }

    get listSource(): any[] {
        if (!this.formSchema.enum) {
            return [];
        }
        return this.formSchema.enum;
    }
}
