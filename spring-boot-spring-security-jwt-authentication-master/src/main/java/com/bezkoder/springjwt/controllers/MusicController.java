package com.bezkoder.springjwt.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bezkoder.springjwt.exception.ResourceNotFoundException;
import com.bezkoder.springjwt.models.Music;
import com.bezkoder.springjwt.repository.MusicRepository;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api/test/")
public class MusicController {

	@Autowired
	private MusicRepository musicRepository;
	
	// get all employees
	@GetMapping("/musics")
	public List<Music> getAllMusics(){
		return musicRepository.findAll();
	}		
	
	// create employee rest api
	@PostMapping("/musics")
	public Music createMusic(@RequestBody Music music) {
		return musicRepository.save(music);
	}
	
	// get employee by id rest api
	@GetMapping("/musics/{id}")
	public ResponseEntity<Music> getMusicById(@PathVariable Long id) {
		Music music = musicRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Music not exist with id :" + id));
		return ResponseEntity.ok(music);
	}
	
	// update employee rest api
	
	@PutMapping("/musics/{id}")
	public ResponseEntity<Music> updateMusic(@PathVariable Long id, @RequestBody Music MusicsDetails){
		Music music = musicRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		
		music.setIdMusic(MusicsDetails.getIdMusic());
		music.setMusicName(MusicsDetails.getMusicName());
		music.setMusicDescription(MusicsDetails.getMusicDescription());
		music.setMusicYear(MusicsDetails.getMusicYear());
		music.setMusicView(MusicsDetails.getMusicView());
		music.setMusicLike(MusicsDetails.getMusicLike());

		
		Music updatedEMusic = musicRepository.save(music);
		return ResponseEntity.ok(updatedEMusic);
	}
	
	// delete employee rest api
	@DeleteMapping("/musics/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteMusic(@PathVariable Long id){
		Music music = musicRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Music not exist with id :" + id));
		
		musicRepository.delete(music);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
