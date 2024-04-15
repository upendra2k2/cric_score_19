package com.Uppi.CricScore.Repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Uppi.CricScore.Entity.Match;

public interface MatchRepo extends JpaRepository<Match, Integer>{
	
	Optional<Match> findByTeamHeading(String teamHeading);
}
