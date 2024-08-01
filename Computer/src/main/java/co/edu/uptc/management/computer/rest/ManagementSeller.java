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

import co.edu.uptc.management.computer.dto.SellerDTO;
import co.edu.uptc.management.persistence.ManagementPersistenceSeller;

@Path("/ManagementSeller")
public class ManagementSeller {
	
public static ManagementPersistenceSeller managementPersistenceSeller = new ManagementPersistenceSeller();;
	
	static {
		managementPersistenceSeller.loadFilePlain("/data/Seller.txt");
	}
	
	@GET
	@Path("/getSeller")
	@Produces( { MediaType.APPLICATION_JSON } )
	public List<SellerDTO> getSeller(){
		return managementPersistenceSeller.getListSellerDTO();
	}
	
	@GET
	@Path("/getSellerByName")
	@Produces( { MediaType.APPLICATION_JSON } )
	public SellerDTO getSellerByName(@QueryParam("nameSeller") String nameSeller){
		for(SellerDTO sellerDTO: managementPersistenceSeller.getListSellerDTO()) {
			if(sellerDTO.getName().equals(nameSeller)) {
				return sellerDTO;
			}
		}
		return null;
	}
	
	
	@POST
	@Path("/createSeller")
	@Produces({ MediaType.APPLICATION_JSON })
	@Consumes({ MediaType.APPLICATION_JSON })
	public SellerDTO createSeller(SellerDTO sellerDTO) {
		if(managementPersistenceSeller.getListSellerDTO().add(sellerDTO)) {
			managementPersistenceSeller.dumpFilePlain("Seller.txt");
			return sellerDTO;
		}
		return null;
	}
	
	@PUT
	@Path("/updateSeller")
	@Produces({ MediaType.APPLICATION_JSON })
	@Consumes({ MediaType.APPLICATION_JSON })
	public SellerDTO updateSeller(SellerDTO sellerDTO) {
		for(SellerDTO seller: managementPersistenceSeller.getListSellerDTO()) {
			if(seller.getName().equals(sellerDTO.getName())) {
				seller.setName(sellerDTO.getName());
				seller.setCompany(sellerDTO.getCompany());
				seller.setEmail(sellerDTO.getEmail());
				managementPersistenceSeller.dumpFilePlain("Seller.txt");
				return sellerDTO;
			}
		}
		return null;
	}
	
	@PUT
	@Path("/updateSellerAttribute")
	@Produces({ MediaType.APPLICATION_JSON })
	@Consumes({ MediaType.APPLICATION_JSON })
	public SellerDTO updateSellerAttribute(SellerDTO sellerDTO) {
		for(SellerDTO seller: managementPersistenceSeller.getListSellerDTO()) {
			if(seller.getName().equals(sellerDTO.getName())) {
				if(!Objects.isNull(sellerDTO.getCompany())) {
					seller.setCompany(sellerDTO.getCompany());
				}
				
				if(!Objects.isNull(sellerDTO.getEmail())) {
					seller.setEmail(sellerDTO.getEmail());
				}
				
				managementPersistenceSeller.dumpFilePlain("Seller.txt");
				return sellerDTO;
			}
		}
		return null;
	}
	
	@DELETE
	@Path("/deleteSeller")
	@Produces({ MediaType.APPLICATION_JSON })
	@Consumes({ MediaType.APPLICATION_JSON })
	public SellerDTO deleteSeller(@QueryParam("nameSeller") String nameSeller) {
		SellerDTO sellerDTO = this.getSellerByName(nameSeller);
		if(sellerDTO != null) {
			managementPersistenceSeller.getListSellerDTO().remove(sellerDTO);
			managementPersistenceSeller.dumpFilePlain("Seller.txt");
		}
		return sellerDTO;
	}

}
