export class SeminorModel {
    public ImageUrl : string; //base64
    public CategoryId : number;
    public Name : string;
    public Description: string;
    public Type : number;// 1 tin tức, 3 hội thảo, 4 lời cảm ơn, 5 lời nhắc hẹn, 6 rút hoa hồng
    public Status : number;
    public Datetime : string;//ngày giờ diễn ra thông báo
    public NotificationDateString: string; //ngày diễn ra thông báo
    public NotificationTimeString: string; //giờ diễn ra thông báo
}