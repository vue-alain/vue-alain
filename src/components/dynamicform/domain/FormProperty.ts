class FormProperty {
    private _id: string = '';
    private _attrs: any = {};
    private _formData: any = {};
    private _fieldKey: string = '';
    private _visiable: boolean = false;
    private _title: string ='';

    constructor(id: string, fieldKey: string, formdata: any, attrs: any, visiable: boolean,title: string){
        this._id = id;
        this._fieldKey = fieldKey;
        this._formData = formdata;
        this._attrs = attrs;
        this._visiable = visiable;
        this._title = title;
    }

    get id(){
        return this._id;
    }

    get attrs(){
        return this._attrs;
    }

    get formData(){
        return this._formData;
    }

    get fieldKey(){
        return this._fieldKey;
    }

    get visiable(){
        return this._visiable;
    }

    get title(){
        return this._title;
    }
}