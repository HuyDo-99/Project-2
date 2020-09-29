export class IntroducedCustomersModel {
        public AffiliationId: number;    
        public CustomerId : number;
        public AffiliatedCustomerId :number;
        public Type : number;
        public Status : number;
        public CreatedOn : string;
        public CreatedBy : number;
        public UpdatedOn : string;
        public UpdatedBy : number;
        public AffiliatedCustomerFullName : string;  // Họ tên 
        public ProfileImageURL: string;// Ảnh đại diện
        public Commision: number;  // Hoa hồng
        public PotentialLevelDesciption: string;  // Mô tả trạng thái L 
        public PotentialLevelId :number;
}
        