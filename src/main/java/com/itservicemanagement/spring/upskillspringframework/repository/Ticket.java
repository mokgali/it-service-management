package com.itservicemanagement.spring.upskillspringframework.repository;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.sql.Date;

@Entity
public class Ticket {      
    
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String category;
	private String status = "created";
	private Date openingDate;
	private Date closingDate;
	private String createdBy;
	private String assignedTo;

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCategory() {
		return this.category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getStatus()
	{
		return this.status;
	}

	public void setStatus(String status)
	{
		this.status =  status;
	}

	public Date getOpeningDate() {
		return this.openingDate;
	}

	public void setOpeningDate(Date openingDate) {
		this.openingDate = openingDate;
	}

	public Date getClosingDate() {
		return this.closingDate;
	}

	public void setClosingDate(Date closingDate) {
		this.closingDate = closingDate;
	}

	public String getCreatedBy() {
		return this.createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public String getAssignedTo() {
		return this.assignedTo;
	}

	public void setAssignedTo(String assignedTo) {
		this.assignedTo = assignedTo;
	}

    protected Ticket(){

    }

    public Ticket(String category,String createdBy) {
        this.category = category;
        this.createdBy = createdBy;
      }  
 


    
}
