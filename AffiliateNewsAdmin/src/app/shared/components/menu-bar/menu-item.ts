export const menuItem: Array<object> = [

    {
        title: 'Tin tức',
        elementOnUrl : 'news', //kiểm tra xem có trong url không để active menu item
        class: 'material-icons',
        icon:'library_books',
        link : '/pages/news'
    },
    
    {
        title: 'Thông báo',
        elementOnUrl : 'notification', 
        class: 'material-icons',
        icon:'notifications',
        link : '/pages/notification'
    },

    {
        title: 'Khung giờ',
        elementOnUrl : 'time',
        class: 'material-icons',
        icon:'event_note',
        link : '/pages/time'
    },

]