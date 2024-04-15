package com.Uppi.CricScore.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Uppi.CricScore.Entity.Match;
import com.Uppi.CricScore.Service.CricService;

@RestController
@CrossOrigin("*")
@RequestMapping("/match")
public class CricController {

	private CricService cricService;

	public CricController(CricService cricService) {
		super();
		this.cricService = cricService;
	}
	
	@GetMapping("/live")
	public ResponseEntity<?> getLiveMatches(){
		return new ResponseEntity<>(this.cricService.getAllLiveMatches(), HttpStatus.OK);
	}
	
	@GetMapping("/")
	public ResponseEntity<?> getAllMatches(){
		return new ResponseEntity<>(this.cricService.getAllMatches(),HttpStatus.OK);
	}
	
	@GetMapping("/points-table")
	public ResponseEntity<?> getIPLPointsTable(){
		return new ResponseEntity<>(this.cricService.getIPL2024pointsTable(),HttpStatus.OK);
	}
}
