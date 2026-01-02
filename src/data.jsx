import React from 'react'

export const eventsData = [
  {
    id: 1,
    image: './assets/explore-1.png',
    date: '09/23/2021',
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in '
  },
  {
    id: 2,
    image: './assets/explore-2.png',
    date: '09/23/2021',
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in '
  }
]

export const specialBoxesData = [
  {
    id: 1,
    title: 'Sharing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in ',
    icon: (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 6C0 4.4087 0.632141 2.88258 1.75736 1.75736C2.88258 0.632141 4.4087 0 6 0H18C19.5913 0 21.1174 0.632141 22.2426 1.75736C23.3679 2.88258 24 4.4087 24 6C24 6.31826 23.8736 6.62348 23.6485 6.84853C23.4235 7.07357 23.1183 7.2 22.8 7.2C22.4817 7.2 22.1765 7.07357 21.9515 6.84853C21.7264 6.62348 21.6 6.31826 21.6 6C21.6 5.04522 21.2207 4.12955 20.5456 3.45442C19.8705 2.77928 18.9548 2.4 18 2.4H6C5.04522 2.4 4.12955 2.77928 3.45442 3.45442C2.77928 4.12955 2.4 5.04522 2.4 6V18C2.4 18.9548 2.77928 19.8705 3.45442 20.5456C4.12955 21.2207 5.04522 21.6 6 21.6H16.8336C16.982 20.2814 17.6107 19.0636 18.5997 18.1789C19.5888 17.2943 20.8689 16.8048 22.1958 16.8039C23.5227 16.8029 24.8036 17.2905 25.7939 18.1737C26.7842 19.0569 27.4147 20.2738 27.565 21.5922C27.7153 22.9106 27.3749 24.2382 26.6088 25.3216C25.8426 26.405 24.7044 27.1685 23.4113 27.4662C22.1182 27.7639 20.7608 27.5751 19.598 26.9358C18.4352 26.2964 17.5486 25.2514 17.1072 24H6C4.4087 24 2.88258 23.3679 1.75736 22.2426C0.632141 21.1174 0 19.5913 0 18V6ZM10.8 26.4C10.4817 26.4 10.1765 26.5264 9.95147 26.7515C9.72643 26.9765 9.6 27.2817 9.6 27.6C9.6 29.1913 10.2321 30.7174 11.3574 31.8426C12.4826 32.9679 14.0087 33.6 15.6 33.6H27.6C29.1913 33.6 30.7174 32.9679 31.8426 31.8426C32.9679 30.7174 33.6 29.1913 33.6 27.6V15.6C33.6 14.0087 32.9679 12.4826 31.8426 11.3574C30.7174 10.2321 29.1913 9.6 27.6 9.6H16.4928C16.0514 8.34862 15.1648 7.30355 14.002 6.66423C12.8392 6.02491 11.4818 5.8361 10.1887 6.13382C8.89558 6.43154 7.75736 7.19496 6.99124 8.27838C6.22511 9.36181 5.88472 10.6894 6.03502 12.0078C6.18532 13.3262 6.81578 14.5431 7.8061 15.4263C8.79642 16.3095 10.0773 16.7971 11.4042 16.7961C12.7311 16.7952 14.0112 16.3057 15.0003 15.4211C15.9893 14.5364 16.618 13.3186 16.7664 12H27.6C28.5548 12 29.4705 12.3793 30.1456 13.0544C30.8207 13.7295 31.2 14.6452 31.2 15.6V27.6C31.2 28.5548 30.8207 29.4705 30.1456 30.1456C29.4705 30.8207 28.5548 31.2 27.6 31.2H15.6C14.6452 31.2 13.7295 30.8207 13.0544 30.1456C12.3793 29.4705 12 28.5548 12 27.6C12 27.2817 11.8736 26.9765 11.6485 26.7515C11.4235 26.5264 11.1183 26.4 10.8 26.4Z" fill="#2C49FE" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Info',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in ',
    icon: (
      <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.875 9.28125C28.875 7.91373 28.3318 6.60222 27.3648 5.63523C26.3978 4.66825 25.0863 4.125 23.7188 4.125H9.28125C7.91373 4.125 6.60222 4.66825 5.63523 5.63523C4.66825 6.60222 4.125 7.91373 4.125 9.28125V23.7188C4.125 25.0863 4.66825 26.3978 5.63523 27.3648C6.60222 28.3318 7.91373 28.875 9.28125 28.875H12.9051C12.3798 28.2388 11.9254 27.5472 11.55 26.8125H9.28125C8.46074 26.8125 7.67383 26.4866 7.09364 25.9064C6.51345 25.3262 6.1875 24.5393 6.1875 23.7188V12.375H15.1326C16.9785 11.0756 19.2287 10.3125 21.6562 10.3125C24.3994 10.3125 26.9156 11.286 28.875 12.9051V9.28125ZM21.6562 10.3125H6.1875V9.28125C6.1875 8.46074 6.51345 7.67383 7.09364 7.09364C7.67383 6.51345 8.46074 6.1875 9.28125 6.1875H23.7188C24.5393 6.1875 25.3262 6.51345 25.9064 7.09364C26.4866 7.67383 26.8125 8.46074 26.8125 9.28125V10.3125H21.6562ZM20.3672 17.5312C20.3672 17.1894 20.503 16.8615 20.7447 16.6197C20.9865 16.378 21.3144 16.2422 21.6562 16.2422C21.9981 16.2422 22.326 16.378 22.5678 16.6197C22.8095 16.8615 22.9453 17.1894 22.9453 17.5312C22.9453 17.8731 22.8095 18.201 22.5678 18.4428C22.326 18.6845 21.9981 18.8203 21.6562 18.8203C21.3144 18.8203 20.9865 18.6845 20.7447 18.4428C20.503 18.201 20.3672 17.8731 20.3672 17.5312ZM22.6875 25.7812C22.6875 26.0548 22.5789 26.3171 22.3855 26.5105C22.1921 26.7039 21.9298 26.8125 21.6562 26.8125C21.3827 26.8125 21.1204 26.7039 20.927 26.5105C20.7336 26.3171 20.625 26.0548 20.625 25.7812V21.6562C20.625 21.3827 20.7336 21.1204 20.927 20.927C21.1204 20.7336 21.3827 20.625 21.6562 20.625C21.9298 20.625 22.1921 20.7336 22.3855 20.927C22.5789 21.1204 22.6875 21.3827 22.6875 21.6562V25.7812ZM12.375 21.6562C12.375 20.4374 12.6151 19.2305 13.0815 18.1045C13.5479 16.9784 14.2316 15.9553 15.0934 15.0934C15.9553 14.2316 16.9784 13.5479 18.1045 13.0815C19.2305 12.6151 20.4374 12.375 21.6562 12.375C22.8751 12.375 24.082 12.6151 25.208 13.0815C26.3341 13.5479 27.3572 14.2316 28.2191 15.0934C29.0809 15.9553 29.7646 16.9784 30.231 18.1045C30.6974 19.2305 30.9375 20.4374 30.9375 21.6562C30.9375 24.1178 29.9597 26.4785 28.2191 28.2191C26.4785 29.9597 24.1178 30.9375 21.6562 30.9375C19.1947 30.9375 16.834 29.9597 15.0934 28.2191C13.3528 26.4785 12.375 24.1178 12.375 21.6562ZM14.4375 21.6562C14.4375 23.5708 15.198 25.4069 16.5518 26.7607C17.9056 28.1145 19.7417 28.875 21.6562 28.875C23.5708 28.875 25.4069 28.1145 26.7607 26.7607C28.1145 25.4069 28.875 23.5708 28.875 21.6562C28.875 19.7417 28.1145 17.9056 26.7607 16.5518C25.4069 15.198 23.5708 14.4375 21.6562 14.4375C19.7417 14.4375 17.9056 15.198 16.5518 16.5518C15.198 17.9056 14.4375 19.7417 14.4375 21.6562Z" fill="#2C49FE" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Help',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in ',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_34717_6864)">
          <path d="M29.8125 11.0416H23.1875C22.3092 11.0425 21.4672 11.3918 20.8462 12.0128C20.2252 12.6338 19.8759 13.4759 19.875 14.3541V20.9791C19.8756 21.5646 20.1084 22.126 20.5225 22.54C20.9365 22.954 21.4978 23.1869 22.0833 23.1875V30.9166C22.0839 31.5021 22.3168 32.0635 22.7308 32.4775C23.1448 32.8915 23.7062 33.1244 24.2917 33.125H28.7083C29.2938 33.1244 29.8552 32.8915 30.2692 32.4775C30.6832 32.0635 30.9161 31.5021 30.9167 30.9166V23.1875C31.5022 23.1869 32.0635 22.954 32.4775 22.54C32.8916 22.126 33.1244 21.5646 33.125 20.9791V14.3541C33.1241 13.4759 32.7748 12.6338 32.1538 12.0128C31.5328 11.3918 30.6908 11.0425 29.8125 11.0416ZM30.9167 20.9791H28.7083V30.9166H24.2917V20.9791H22.0833V14.3541C22.0833 14.0613 22.1997 13.7804 22.4067 13.5734C22.6138 13.3663 22.8947 13.25 23.1875 13.25H29.8125C30.1053 13.25 30.3862 13.3663 30.5933 13.5734C30.8003 13.7804 30.9167 14.0613 30.9167 14.3541V20.9791Z" fill="#2C49FE" />
          <path d="M22.084 5.52079C22.084 4.64726 22.343 3.79334 22.8283 3.06703C23.3136 2.34071 24.0034 1.77461 24.8105 1.44033C25.6175 1.10604 26.5056 1.01857 27.3623 1.18899C28.219 1.35941 29.006 1.78006 29.6237 2.39774C30.2414 3.01542 30.662 3.8024 30.8325 4.65915C31.0029 5.5159 30.9154 6.40394 30.5811 7.21098C30.2468 8.01802 29.6807 8.70781 28.9544 9.19312C28.2281 9.67843 27.3742 9.93746 26.5007 9.93746C25.3296 9.93629 24.2069 9.47059 23.3789 8.64256C22.5509 7.81453 22.0852 6.69181 22.084 5.52079ZM24.2923 5.52079C24.2923 5.95756 24.4218 6.38452 24.6645 6.74768C24.9071 7.11084 25.252 7.39389 25.6556 7.56103C26.0591 7.72817 26.5031 7.77191 26.9315 7.6867C27.3599 7.60149 27.7533 7.39116 28.0622 7.08232C28.371 6.77348 28.5813 6.37999 28.6666 5.95162C28.7518 5.52324 28.708 5.07922 28.5409 4.6757C28.3737 4.27218 28.0907 3.92729 27.7275 3.68463C27.3644 3.44198 26.9374 3.31246 26.5007 3.31246C25.9151 3.31305 25.3538 3.5459 24.9398 3.95991C24.5258 4.37393 24.2929 4.93529 24.2923 5.52079Z" fill="#2C49FE" />
          <path d="M15.4583 17.6666V14.3541C15.4575 13.4759 15.1082 12.6338 14.4872 12.0128C13.8661 11.3918 13.0241 11.0425 12.1458 11.0416H5.52083C4.64257 11.0425 3.80053 11.3918 3.17951 12.0128C2.55849 12.6338 2.20921 13.4759 2.20833 14.3541V17.6666H0V19.875H17.6667V17.6666H15.4583ZM4.41667 14.3541C4.41667 14.0613 4.533 13.7804 4.74007 13.5734C4.94714 13.3663 5.22799 13.25 5.52083 13.25H12.1458C12.4387 13.25 12.7195 13.3663 12.9266 13.5734C13.1337 13.7804 13.25 14.0613 13.25 14.3541V17.6666H4.41667V14.3541Z" fill="#2C49FE" />
          <path d="M4.41602 5.52079C4.41602 4.64726 4.67505 3.79334 5.16036 3.06703C5.64567 2.34071 6.33546 1.77461 7.1425 1.44033C7.94954 1.10604 8.83758 1.01857 9.69433 1.18899C10.5511 1.35941 11.3381 1.78006 11.9557 2.39774C12.5734 3.01542 12.9941 3.8024 13.1645 4.65915C13.3349 5.5159 13.2474 6.40394 12.9132 7.21098C12.5789 8.01802 12.0128 8.70781 11.2865 9.19312C10.5601 9.67843 9.70622 9.93746 8.83268 9.93746C7.66167 9.93629 6.53895 9.47059 5.71092 8.64256C4.88289 7.81453 4.41718 6.69181 4.41602 5.52079ZM6.62435 5.52079C6.62435 5.95756 6.75387 6.38452 6.99652 6.74768C7.23918 7.11084 7.58407 7.39389 7.98759 7.56103C8.39111 7.72817 8.83513 7.77191 9.26351 7.6867C9.69188 7.60149 10.0854 7.39116 10.3942 7.08232C10.7031 6.77348 10.9134 6.37999 10.9986 5.95162C11.0838 5.52324 11.0401 5.07922 10.8729 4.6757C10.7058 4.27218 10.4227 3.92729 10.0596 3.68463C9.69641 3.44198 9.26945 3.31246 8.83268 3.31246C8.24718 3.31305 7.68582 3.5459 7.2718 3.95991C6.85778 4.37393 6.62493 4.93529 6.62435 5.52079Z" fill="#2C49FE" />
        </g>
        <defs>
          <clipPath id="clip0_34717_6864">
            <rect width="35.3333" height="35.3333" fill="white" />
          </clipPath>
        </defs>
      </svg>
    )
  }
]

export const statisticsData = [
  {
    id: 1,
    number: '8800',
    label: 'PARTICIPANTS',
    icon: (
      <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.375 32.5H35.5V29.25C35.4999 28.2369 35.1842 27.2489 34.5967 26.4235C34.0092 25.5981 33.1792 24.9762 32.222 24.6443C31.2647 24.3125 30.2279 24.2871 29.2555 24.5717C28.2832 24.8563 27.4237 25.4367 26.7965 26.2324L27.375 32.5ZM27.375 32.5H11.125H27.375ZM27.375 32.5V29.25C27.375 28.184 27.1702 27.1651 26.7965 26.2324L27.375 32.5ZM11.125 32.5H3V29.25C3.00007 28.2369 3.3158 27.2489 3.90327 26.4235C4.49075 25.5981 5.3208 24.9762 6.27803 24.6443C7.23526 24.3125 8.27211 24.2871 9.24445 24.5717C10.2168 24.8563 11.0763 25.4367 11.7035 26.2324L11.125 32.5ZM11.125 32.5V29.25C11.125 28.184 11.3297 27.1651 11.7035 26.2324L11.125 32.5ZM11.7035 26.2324C12.307 24.7243 13.3484 23.4316 14.6935 22.5211C16.0386 21.6105 17.6257 21.1239 19.25 21.1239C20.8743 21.1239 22.4614 21.6105 23.8065 22.5211C25.1516 23.4316 26.193 24.7243 26.7965 26.2324H11.7035ZM24.125 11.375C24.125 12.6679 23.6114 13.9079 22.6971 14.8221C21.7829 15.7364 20.5429 16.25 19.25 16.25C17.9571 16.25 16.7171 15.7364 15.8029 14.8221C14.8886 13.9079 14.375 12.6679 14.375 11.375C14.375 10.0821 14.8886 8.84209 15.8029 7.92785C16.7171 7.01361 17.9571 6.5 19.25 6.5C20.5429 6.5 21.7829 7.01361 22.6971 7.92785C23.6114 8.84209 24.125 10.0821 24.125 11.375V11.375ZM33.875 16.25C33.875 17.112 33.5326 17.9386 32.9231 18.5481C32.3136 19.1576 31.487 19.5 30.625 19.5C29.763 19.5 28.9364 19.1576 28.3269 18.5481C27.7174 17.9386 27.375 17.112 27.375 16.25C27.375 15.388 27.7174 14.5614 28.3269 13.9519C28.9364 13.3424 29.763 13 30.625 13C31.487 13 32.3136 13.3424 32.9231 13.9519C33.5326 14.5614 33.875 15.388 33.875 16.25ZM11.125 16.25C11.125 17.112 10.7826 17.9386 10.1731 18.5481C9.5636 19.1576 8.73695 19.5 7.875 19.5C7.01305 19.5 6.1864 19.1576 5.5769 18.5481C4.96741 17.9386 4.625 17.112 4.625 16.25C4.625 15.388 4.96741 14.5614 5.5769 13.9519C6.1864 13.3424 7.01305 13 7.875 13C8.73695 13 9.5636 13.3424 10.1731 13.9519C10.7826 14.5614 11.125 15.388 11.125 16.25Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 2,
    number: '300',
    label: 'TOPICS',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M34 10H20.6667L17.3333 6.66667H7.33333C5.5 6.66667 4.01667 8.16667 4.01667 10L4 30C4 31.8333 5.5 33.3333 7.33333 33.3333H35.2833C36.4167 33.3333 37.3333 32.4 37.3333 31.2833V13.3333C37.3333 11.5 35.8333 10 34 10ZM34 30H7.33333V10H15.95L19.2833 13.3333H34V30ZM30.6667 20H10.6667V16.6667H30.6667V20ZM24 26.6667H10.6667V23.3333H24V26.6667Z" fill="white"/>
      </svg>
    )
  },
  {
    id: 3,
    number: '50',
    label: 'SPEAKERS',
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.6875 19V17.8125C29.6875 14.978 28.5615 12.2596 26.5572 10.2553C24.5529 8.251 21.8345 7.125 19 7.125C16.1655 7.125 13.4471 8.251 11.4428 10.2553C9.4385 12.2596 8.3125 14.978 8.3125 17.8125V19C6.73778 19 5.22755 19.6256 4.11405 20.7391C3.00056 21.8526 2.375 23.3628 2.375 24.9375C2.375 26.5122 3.00056 28.0224 4.11405 29.1359C5.22755 30.2494 6.73778 30.875 8.3125 30.875H10.6875V17.8125C10.6875 15.6079 11.5633 13.4936 13.1222 11.9347C14.6811 10.3758 16.7954 9.5 19 9.5C21.2046 9.5 23.3189 10.3758 24.8778 11.9347C26.4367 13.4936 27.3125 15.6079 27.3125 17.8125V30.875H29.6875C31.2622 30.875 32.7724 30.2494 33.8859 29.1359C34.9994 28.0224 35.625 26.5122 35.625 24.9375C35.625 23.3628 34.9994 21.8526 33.8859 20.7391C32.7724 19.6256 31.2622 19 29.6875 19ZM4.75 24.9375C4.75 23.9927 5.12533 23.0865 5.79343 22.4184C6.46153 21.7503 7.36767 21.375 8.3125 21.375V28.5C7.36767 28.5 6.46153 28.1247 5.79343 27.4566C5.12533 26.7885 4.75 25.8823 4.75 24.9375ZM29.6875 28.5V21.375C30.6323 21.375 31.5385 21.7503 32.2066 22.4184C32.8747 23.0865 33.25 23.9927 33.25 24.9375C33.25 25.8823 32.8747 26.7885 32.2066 27.4566C31.5385 28.1247 30.6323 28.5 29.6875 28.5Z" fill="white"/>
      </svg>
    )
  },
  {
    id: 4,
    number: '30',
    label: 'AWARDS',
    icon: (
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M10.5 6.125C10.5 5.89294 10.5922 5.67038 10.7563 5.50628C10.9204 5.34219 11.1429 5.25 11.375 5.25H30.625C30.8571 5.25 31.0796 5.34219 31.2437 5.50628C31.4078 5.67038 31.5 5.89294 31.5 6.125V7H35.875C36.1071 7 36.3296 7.09219 36.4937 7.25628C36.6578 7.42038 36.75 7.64294 36.75 7.875V13.125C36.75 14.2853 36.2891 15.3981 35.4686 16.2186C34.6481 17.0391 33.5353 17.5 32.375 17.5H30.9024C29.554 21.315 26.0636 24.1185 21.875 24.4641V29.75H28C28.2321 29.75 28.4546 29.8422 28.6187 30.0063C28.7828 30.1704 28.875 30.3929 28.875 30.625V35.875C28.875 36.1071 28.7828 36.3296 28.6187 36.4937C28.4546 36.6578 28.2321 36.75 28 36.75H14C13.7679 36.75 13.5454 36.6578 13.3813 36.4937C13.2172 36.3296 13.125 36.1071 13.125 35.875V30.625C13.125 30.3929 13.2172 30.1704 13.3813 30.0063C13.5454 29.8422 13.7679 29.75 14 29.75H20.125V24.4641C15.9373 24.1185 12.446 21.315 11.0976 17.5H9.625C8.46468 17.5 7.35188 17.0391 6.53141 16.2186C5.71094 15.3981 5.25 14.2853 5.25 13.125V7.875C5.25 7.64294 5.34219 7.42038 5.50628 7.25628C5.67038 7.09219 5.89294 7 6.125 7H10.5V6.125ZM29.75 14V7H12.25V14C12.25 18.8326 16.1674 22.75 21 22.75C25.8326 22.75 29.75 18.8326 29.75 14ZM31.5 8.75V15.75H32.375C33.0712 15.75 33.7389 15.4734 34.2312 14.9812C34.7234 14.4889 35 13.8212 35 13.125V8.75H31.5ZM7 8.75H10.5V15.75H9.625C8.92881 15.75 8.26113 15.4734 7.76884 14.9812C7.27656 14.4889 7 13.8212 7 13.125V8.75ZM14.875 31.5V35H27.125V31.5H14.875Z" fill="white"/>
      </svg>
    )
  }
]

export const commentsData = [
  {
    id: 1,
    username: 'John Doe',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu. Nunc elit elit, malesuada id suscipit cursus,',
    profileImage: '/assets/profile-img.png'
  },
  {
    id: 2,
    username: 'John Doe',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu. Nunc elit elit, malesuada id suscipit cursus,',
    profileImage: '/assets/profile-img.png'
  },
  {
    id: 3,
    username: 'John Doe',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu. Nunc elit elit, malesuada id suscipit cursus,',
    profileImage: '/assets/profile-img.png'
  },
  {
    id: 4,
    username: 'John Doe',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu. Nunc elit elit, malesuada id suscipit cursus,',
    profileImage: '/assets/profile-img.png'
  },
  {
    id: 5,
    username: 'John Doe',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu. Nunc elit elit, malesuada id suscipit cursus,',
    profileImage: '/assets/profile-img.png'
  },
  {
    id: 6,
    username: 'John Doe',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu. Nunc elit elit, malesuada id suscipit cursus,',
    profileImage: '/assets/profile-img.png'
  },
  
]

export const commentTexts = {
  removeComment: 'Remove Comment'
}

export const textContent = {
  hero: {
    title: 'Sed tortor in',
    titleHighlight: 'quisque morbi',
    titleEnd: 'scelerisque etiam eu.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu. Nunc elit elit, malesuada id suscipit cursus,',
    getStarted: 'Get Started',
    learnMore: 'Learn More'
  },
  special: {
    heading: 'What make us special ?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu. Nunc elit elit, malesuada id suscipit cursus,'
  },
  participants: {
    heading: 'Lorem ipsum dolor sit amet, consectetur',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec'
  },
  explore: {
    heading: 'Explore our latest events',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu.',
    learnMore: 'LEARN MORE'
  },
  joinUs: {
    heading: 'Join Us',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu.'
  },
  form: {
    title: 'Sign Up',
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email Address',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    aboutMe: 'About Me',
    signUp: 'Sign Up'
  },
  quote: {
    text: 'Semper faucibus suscipit ultricies eleifend semper sit tellus gravida pretium. Cras cursus ut semper eleifend tortor lectus tristique turpis. Laoreet amet ultrices est lectus accumsan nibh cursus nunc. Faucibus orci, neque, pretium, massa volutpat convallis nisl pellentesque. Gravida in ultrices vitae tortor. Dignissim viverra volutpat neque gravida aliquet urna faucibus viverra vulputate. nibh cursus nunc. Faucibus orci, neque, pretium, massa volutpat convallis nisl pellentesque. Gravida in ultrices vitae tortor. Dignissim viverra volutpat neque gravida aliquet urna faucibus viverra vulputate.'
  },
  gallery: {
    title: 'Gallery'
  },
  tellUs: {
    title: 'Tell Us',
    description: 'Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.'
  },
  postComment: {
    placeholder: 'Add a new comment',
    button: 'Post Comment'
  },
  profile: {
    breadcrumb: {
      home: 'Home',
      username: 'Username'
    },
    name: 'Jhone Doe',
    description: 'Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.',
    info: {
      date: '10/02/2022',
      location: 'Mumbai',
      followers: '1,080',
      following: '1,080',
      posts: '1,080'
    },
    buttons: {
      unshowJourney: 'Unshow Journey of Feed',
      showJourney: 'Show Journey of Feed'
    }
  },
  location: {
    location: 'Location',
    locationPlaceholder: 'Search by city',
    date: 'Date',
    dateValue: '09/23/2021',
    capacity: 'Capicity',
    capacityPlaceholder: 'Search by city',
    button: 'GO CHECK'
  },
  navigation: {
    logo: {
      events: 'Events',
      free: 'Free'
    },
    links: {
      home: 'HOME',
      events: 'EVENTS',
      feed: 'FEED',
      username: 'USER NAME'
    },
    logout: 'Log Out'
  },
  footer: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. c',
    services: 'SERVICES',
    servicesLinks: {
      about: 'About',
      news: 'News',
      ullamcorper: 'ullamcorper',
      contact: 'Contact'
    },
    events: 'EVENTS',
    eventsLinks: {
      ullamcorper1: 'ullamcorper',
      ullamcorper2: 'ullamcorper',
      ullamcorper3: 'ullamcorper',
      ullamcorper4: 'ullamcorper'
    },
    gallery: 'GALLERY',
    showMore: 'Show More',
    copyright: '© Credits of companyName belong to companyName.'
  },
  newPosts: {
    heading: 'New Posts',
    profile: {
      name: 'Jhon Cena',
      eventName: 'Event Name'
    },
    post: {
      title: 'Fusce adipiscing nunc et tellus eu, tristique sodales sit aliquet.',
      description1: 'Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.',
      description2: 'Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.',
      date: '10/02/2022',
      likes: '100',
      comments: '100'
    }
  },
  events: {
    breadcrumb: {
      home: 'Home',
      events: 'Events'
    },
    heading: 'Choose your next event'
  }
}

