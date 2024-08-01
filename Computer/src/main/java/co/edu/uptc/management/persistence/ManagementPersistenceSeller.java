package co.edu.uptc.management.persistence;

import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

import co.edu.uptc.management.computer.dto.SellerDTO;
import co.edu.uptc.management.constans.CommonConstants;

public class ManagementPersistenceSeller extends FilePlain{
private List<SellerDTO> listSellerDTO = new ArrayList<>();
	
	public void dumpFilePlain(String rutaArchivo) {
		List<String> records = new ArrayList<>();
		 for(SellerDTO objectDTO : listSellerDTO){
			 StringBuilder contentObject = new StringBuilder();
			 contentObject.append(objectDTO.getName()).append(CommonConstants.SEMI_COLON);
			 contentObject.append(objectDTO.getCompany()).append(CommonConstants.SEMI_COLON);
			 contentObject.append(objectDTO.getEmail());
			 
			 records.add(contentObject.toString());
		 }
		 this.writer(rutaArchivo, records);
	}
	
	public void loadFilePlain(String rutaNombreArchivo) {
		List<String> contentInLine = this.reader(rutaNombreArchivo);
		for(String row: contentInLine) {
			StringTokenizer tokens = new StringTokenizer(row, CommonConstants.SEMI_COLON);
			while(tokens.hasMoreElements()){
				String name = tokens.nextToken();
				String company = tokens.nextToken();
				String email = tokens.nextToken();
				
				listSellerDTO.add(new SellerDTO(name, company, email));
			}
		}
	}

	public List<SellerDTO> getListSellerDTO() {
		return listSellerDTO;
	}

	public void setListSellerDTO(List<SellerDTO> listSellerDTO) {
		this.listSellerDTO = listSellerDTO;
	}

}
