
export const adminMenu = [
  {
    text: 'Người dùng',
    path: '/users'
  }
]

export const doctorMenu = [
  {
    text: 'Kết quả thử nghiệm gen',
    path: '/gen_testing_results'
  },
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
