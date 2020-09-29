export class RegisterModel {
    public FirstName: string;
    public LastName: string;
    public Phone: string;       
    public Email: string;// Email, cũng là tên đăng nhập hệ thống
    public Password: string;
    public ProfileImageString: string; // ảnh của user, dưới dạng base64
    public CustomerCode: string;// mã khách hàng
    public IdCardNumber: string;// CMND
    public BirthDay: string; // NGày sinh
    public GenderType: number;// 1
    public NoteContent: string; // Ghi chú
     public Address: string;
    public ReferencedCustomerId: number;
}
    