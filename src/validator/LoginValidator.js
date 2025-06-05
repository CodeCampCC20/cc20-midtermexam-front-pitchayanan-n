import * as Yup from 'yup';

const LoginValidator = Yup.object({
  username: Yup.string()
  .required("กรุณากรอกชื่อผู้ใช้งาน"),
  password: Yup.string()
  .min(6, ({path, value})=> `${path} ต้องมีอย่างน้อย 6 ตัว ตอนนี้มีแค่ ${value.length}`)
  .required("กรุณากรอกรหัสผ่าน")
})


export default LoginValidator