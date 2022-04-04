package com.bezkoder.springjwt.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "mylist")
public class Music {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "idmusic")
	private String idMusic;
	
	@Column(name = "name")
	private String musicName;

	@Column(name = "description")
	private String musicDescription;
	
	@Column(name = "year")
	private String musicYear;
	
	@Column(name = "view")
	private String musicView;
	
	@Column(name = "liked")
	private String musicLike;
	
	public Music() {
		
	}
	
	public Music(String idMsuic,String musicName, String musicDescription, String musicYear, String musicView,
			String musicLike) {
		super();
		this.idMusic   = idMusic;
		this.musicName = musicName;
		this.musicDescription = musicDescription;
		this.musicYear = musicYear;
		this.musicView = musicView;
		this.musicLike = musicLike;
	}



	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getIdMusic() {
		return idMusic;
	}

	public void setIdMusic(String idMusic) {
		this.idMusic = idMusic;
	}
	
	public String getMusicName() {
		return musicName;
	}

	public void setMusicName(String musicName) {
		this.musicName = musicName;
	}

	public String getMusicDescription() {
		return musicDescription;
	}

	public void setMusicDescription(String musicDescription) {
		this.musicDescription = musicDescription;
	}

	public String getMusicYear() {
		return musicYear;
	}

	public void setMusicYear(String musicYear) {
		this.musicYear = musicYear;
	}

	public String getMusicView() {
		return musicView;
	}

	public void setMusicView(String musicView) {
		this.musicView = musicView;
	}

	public String getMusicLike() {
		return musicLike;
	}

	public void setMusicLike(String musicLike) {
		this.musicLike = musicLike;
	}
	
}