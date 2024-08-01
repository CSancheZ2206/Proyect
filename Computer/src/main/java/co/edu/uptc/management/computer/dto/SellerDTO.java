package co.edu.uptc.management.computer.dto;

public class SellerDTO {
	
	private String name;
    private String company;
    private String email;

    public SellerDTO() {
    }

    public SellerDTO(String name, String company, String email) {
        this.name = name;
        this.company = company;
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "Seller [name=" + name + ", company=" + company + ", email=" + email + "]";
    }

}
