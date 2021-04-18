
export const adminMenu = [
  {
    text: 'Người dùng',
    path: '/users'
  },
  {
    text: 'Thử nghiệm gen',
    path: '/gen_testing'
  }
]

export const doctorMenu = [
  {
    text: 'Thử nghiệm gen',
    path: '/gen_testing'
  }
]

export const patientMenu = [
  {
    text: 'Xem kết quả',
    path: '/my_testing_results'
  },
]

interface Menu {
  [role: string]: any[];
}

export const menu: Menu = {
  'ADMIN': adminMenu,
  'PATIENT': patientMenu,
  'DOCTOR': doctorMenu
}
