package co.edu.uptc.management.computer.rest;

import java.util.List;
import java.util.Objects;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import co.edu.uptc.management.computer.dto.*;
import co.edu.uptc.management.persistence.*;

@Path("/ManagementComputer")
public class ManagementComputer {

public static ManagementPersistenceComputer managementPersistenceComputer = new ManagementPersistenceComputer();;
	
	static {
		managementPersistenceComputer.loadFilePlain("/data/Computer.txt");
	}
	
	@GET
	@Path("/getComputers")
	@Produces( { MediaType.APPLICATION_JSON } )
	public List<ComputerDTO> getBooks(){
		return managementPersistenceComputer.getListComputerDTO();
	}
	
	@GET
	@Path("/getComputerByReference")
	@Produces( { MediaType.APPLICATION_JSON } )
	public ComputerDTO getComputersByReference(@QueryParam("referenceComputer") String referenceComputer){
		for(ComputerDTO computerDTO: managementPersistenceComputer.getListComputerDTO()) {
			if(computerDTO.getReference().equals(referenceComputer)) {
				return computerDTO;
			}
		}
		return null;
	}
	
	
	@POST
	@Path("/createComputer")
	@Produces({ MediaType.APPLICATION_JSON })
	@Consumes({ MediaType.APPLICATION_JSON })
	public ComputerDTO createComputer(ComputerDTO computerDTO) {
		if(managementPersistenceComputer.getListComputerDTO().add(computerDTO)) {
			managementPersistenceComputer.dumpFilePlain("Computer.txt");
			return computerDTO;
		}
		return null;
	}
	
	@PUT
	@Path("/updateComputer")
	@Produces({ MediaType.APPLICATION_JSON })
	@Consumes({ MediaType.APPLICATION_JSON })
	public ComputerDTO updateComputer(ComputerDTO computerDTO) {
		for(ComputerDTO book: managementPersistenceComputer.getListComputerDTO()) {
			if(book.getReference().equals(computerDTO.getReference())) {
				book.setReference(computerDTO.getReference());
				book.setBrand(computerDTO.getBrand());
				book.setModel(computerDTO.getModel());
				book.setOpSystem(computerDTO.getOpSystem());
				book.setProcessor(computerDTO.getProcessor());
				book.setRamMemory(computerDTO.getRamMemory());
				managementPersistenceComputer.dumpFilePlain("Computer.txt");
				return computerDTO;
			}
		}
		return null;
	}
	
	@PUT
	@Path("/updateComputerAttribute")
	@Produces({ MediaType.APPLICATION_JSON })
	@Consumes({ MediaType.APPLICATION_JSON })
	public ComputerDTO updateComputerAttribute(ComputerDTO computerDTO) {
		for(ComputerDTO book: managementPersistenceComputer.getListComputerDTO()) {
			if(book.getReference().equals(computerDTO.getReference())) {
				if(!Objects.isNull(computerDTO.getReference())) {
					book.setReference(computerDTO.getReference());
				}
				
				if(!Objects.isNull(computerDTO.getModel())) {
					book.setModel(computerDTO.getModel());
				}
				
				managementPersistenceComputer.dumpFilePlain("Computer.txt");
				return computerDTO;
			}
		}
		return null;
	}
	
	@DELETE
	@Path("/deleteComputer")
	@Produces({ MediaType.APPLICATION_JSON })
	@Consumes({ MediaType.APPLICATION_JSON })
	public ComputerDTO deleteComputer(@QueryParam("referenceComputer") String referenceComputer) {
		ComputerDTO bookDTO = this.getComputersByReference(referenceComputer);
		if(bookDTO != null) {
			managementPersistenceComputer.getListComputerDTO().remove(bookDTO);
			managementPersistenceComputer.dumpFilePlain("Computer.txt");
		}
		return bookDTO;
	}
}
