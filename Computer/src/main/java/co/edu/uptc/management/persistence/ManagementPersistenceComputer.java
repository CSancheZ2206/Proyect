package co.edu.uptc.management.persistence;

import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

import co.edu.uptc.management.constans.*;
import co.edu.uptc.management.computer.dto.*;

public class ManagementPersistenceComputer extends FilePlain{
private List<ComputerDTO> listComputerDTO = new ArrayList<>();
	
	public void dumpFilePlain(String rutaArchivo) {
		List<String> records = new ArrayList<>();
		 for(ComputerDTO objectDTO : listComputerDTO){
			 StringBuilder contentObject = new StringBuilder();
			 contentObject.append(objectDTO.getReference()).append(CommonConstants.SEMI_COLON);
			 contentObject.append(objectDTO.getBrand()).append(CommonConstants.SEMI_COLON);
			 contentObject.append(objectDTO.getModel()).append(CommonConstants.SEMI_COLON);
			 contentObject.append(objectDTO.getOpSystem()).append(CommonConstants.SEMI_COLON);
			 contentObject.append(objectDTO.getProcessor()).append(CommonConstants.SEMI_COLON);
			 contentObject.append(objectDTO.getRamMemory());
			 
			 records.add(contentObject.toString());
		 }
		 this.writer(rutaArchivo, records);
	}
	
	public void loadFilePlain(String rutaNombreArchivo) {
		List<String> contentInLine = this.reader(rutaNombreArchivo);
		for(String row: contentInLine) {
			StringTokenizer tokens = new StringTokenizer(row, CommonConstants.SEMI_COLON);
			while(tokens.hasMoreElements()){
				String reference = tokens.nextToken();
				String brand = tokens.nextToken();
				String model = tokens.nextToken();
				String opSystem = tokens.nextToken();
				String processor = tokens.nextToken();
				String ramMemory = tokens.nextToken();
				
				listComputerDTO.add(new ComputerDTO(reference, brand, model, opSystem, processor,ramMemory));
			}
		}
	}

	public List<ComputerDTO> getListComputerDTO() {
		return listComputerDTO;
	}

	public void setListComputerDTO(List<ComputerDTO> listComputerDTO) {
		this.listComputerDTO = listComputerDTO;
	}

}
