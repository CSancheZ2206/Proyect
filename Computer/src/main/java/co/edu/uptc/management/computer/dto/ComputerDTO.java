package co.edu.uptc.management.computer.dto;

public class ComputerDTO {
	
	private String reference;
    private String brand;
    private String model;
    private String opSystem;
    private String processor;
    private String ramMemory;

    public ComputerDTO() {
    }

    public ComputerDTO(String reference, String brand, String model, String oSystem, String Processor, String ramMemory) {
        this.reference = reference;
        this.brand = brand;
        this.model = model;
        this.opSystem = oSystem;
        this.processor = Processor;
        this.ramMemory = ramMemory;
    }

    public String getReference() {
        return reference;
    }

    public void setReference(String reference) {
        this.reference = reference;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getOpSystem() {
        return opSystem;
    }

    public void setOpSystem(String opSystem) {
        this.opSystem = opSystem;
    }

    public String getProcessor() {
        return processor;
    }

    public void setProcessor(String processor) {
        this.processor = processor;
    }

    public String getRamMemory() {
        return ramMemory;
    }

    public void setRamMemory(String ramMemory) {
        this.ramMemory = ramMemory;
    }

    @Override
    public String toString() {
        return "Computer [reference=" + reference + ", brand=" + brand + ", model=" + model + ", opSystem="
                + opSystem + ", processor=" + processor + ", ramMemory=" + ramMemory + "]";
    }

}
