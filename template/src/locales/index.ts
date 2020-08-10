import { keyMirror } from 'utils/keyMirror';
import { FieldName } from './../constant/index';


enum languages {
  en,
  vi
}



export const strings: any = {
  en: {
    auth:
    {
      [FieldName.EMAIL]: "Email",
      [FieldName.PASSWORD]: "Mật khẩu",
      [FieldName.RE_PASSWORD]: "Nhập lại mật khẩu",
      [FieldName.ADDRESS]: 'Địa chỉ',
      [FieldName.FULLNAME]: 'Họ tên',
      [FieldName.BIRTHDAY]: 'Ngày sinh',
      [FieldName.PASSPORT]: 'Chứng minh thư',
      [FieldName.GENDER]: 'Giới tinh',
      [FieldName.ORGANIZATION]: 'Tên doanh nghiệp',
      [FieldName.TAX]: 'Mã số thuế',
      [FieldName.AGENT]: 'Người đại diện',
      [FieldName.PHONENUMBER]: 'Số điện thoại'


    },
    validation:
    {
      [FieldName.FULLNAME]: 'Họ tên không được để trống',
      [FieldName.EMAIL]: 'Email không được để trống',
      [FieldName.PASSPORT]: 'CMND/Hộ chiếu không được để trống',
      [FieldName.PASSWORD]: 'Mật khẩu không được để trống',
      [FieldName.RE_PASSWORD]: 'Mật khẩu không được để trống',
      [FieldName.PHONENUMBER]: 'Số điện thoại không được để trống',
    },
    placeholder:
    {
      [FieldName.EMAIL]: 'Nhập email',
      [FieldName.PASSWORD]: 'Nhập mật khẩu'

    },
    screen:
    {
      LOGIN_BUTTON_LABEL: 'Đăng nhập',
      REGISTER_BUTTON_LABEL: 'Đăng ký',
      REGISTER_TEXT_LABEL: 'Đăng ký tài khoản',
      REGISTER_INDIVIDUAL_LABEL: 'Cá nhân',
      REGISTER_ORGANIZATION_LABEL: 'Doanh nghiệp'

    },



  }
};

export const getString = (prefix: string, str: string) => {
  return strings['en'][prefix][str];
};
