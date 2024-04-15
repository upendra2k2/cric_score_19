package com.Uppi.CricScore.Service;

import java.util.List;

import com.Uppi.CricScore.Entity.Match;

public interface CricService {

	List<Match> getAllMatches();
	
	List<Match> getAllLiveMatches();
	
	List<List<String>> getIPL2024pointsTable();
}
