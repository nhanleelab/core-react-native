import { KeyboardType } from 'react-native';
import { handleSubmitFormikInterface } from 'hoc/withConnectFormik';
import { Control, IForm, FormMode, Row } from 'models/form';



export enum Stage {
    ACTIVE_ACCOUNT,
    ACTIVE_SUCCESS,
    LOGIN,
    RESET_PASSWORD,
    RESET_PASSWORD_OTP
}
export interface FormStage {

    stage: Stage,
    title: string,
    descriptions: string,
    rows: Row[]
}

export const Forms: FormStage[] = [
    {
        stage: Stage.LOGIN,
        title: 'Login',
        descriptions: '',
        rows: [
            {
                controls: [
                    {
                        fieldName: 'username',
                        label: '',
                        placeholder: 'Tài khoản',
                        type: 'text',


                    }
                ]
            },
            {
                controls: [
                    {
                        fieldName: 'password',
                        label: '',
                        placeholder: 'Mật khẩu',
                        type: 'password',


                    }
                ]
            }
        ]

    }
]
