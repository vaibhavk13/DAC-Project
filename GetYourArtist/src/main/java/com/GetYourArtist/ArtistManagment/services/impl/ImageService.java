package com.GetYourArtist.ArtistManagment.services.impl;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@Service
public class ImageService {

	private final Path artistProfileRootLocation = Paths.get("D:/artist"); // Directory to store Artist portfolio
	private final Path artistRootLocation = Paths.get("D:/artist'portfolio"); // Directory to store Artist portfolio
	private final Path userRootLocation = Paths.get("D:/user"); // Directory to store User images
	private final Path blogRootLocation = Paths.get("D:/blog"); // Directory to store blog images

	@Autowired
	public ImageService() {
		try {
			Files.createDirectories(artistProfileRootLocation);
			Files.createDirectories(artistRootLocation);
			Files.createDirectories(userRootLocation);
			Files.createDirectories(blogRootLocation);
		} catch (IOException e) {
			throw new RuntimeException("Could not initialize storage", e);
		}
	}

	// Method to upload images for artists
	public List<String> uploadArtistImages(List<MultipartFile> files) {
		return uploadAImages(files, artistRootLocation, "/artist-portfolio/");
	}

	// Method to upload a single image for artist profile
	public String uploadArtistProfileImage(MultipartFile file) {
		return uploadImage(file, artistProfileRootLocation, "/artist-profile/");
	}

	// Method to upload images for users
	public String uploadUserImage(MultipartFile file) {
		return uploadUImage(file, userRootLocation, "/user-images/");
	}

	// Method to upload images for blogs
	public List<String> uploadBlogImages(List<MultipartFile> files) {
		return uploadImages(files, blogRootLocation, "/blog-images/");
	}

	// Helper method to upload multiple images
	private List<String> uploadImages(List<MultipartFile> files, Path rootLocation, String urlPath) {
		List<String> imageUrls = new ArrayList<>();
		for (MultipartFile file : files) {
			try {
				String fileName = file.getOriginalFilename();
				Path destinationFile = rootLocation.resolve(Paths.get(fileName)).normalize().toAbsolutePath();
				file.transferTo(destinationFile);
				imageUrls.add(ServletUriComponentsBuilder.fromCurrentContextPath().path(urlPath).path(fileName)
						.toUriString());
			} catch (IOException e) {
				throw new RuntimeException("Failed to store file " + file.getOriginalFilename(), e);
			}
		}
		return imageUrls;
	}

	private List<String> uploadAImages(List<MultipartFile> files, Path rootLocation, String urlPath) {
		List<String> imageUrls = new ArrayList<>();
		for (MultipartFile file : files) {
			try {
				String fileName = file.getOriginalFilename();
				Path destinationFile = rootLocation.resolve(Paths.get(fileName)).normalize().toAbsolutePath();
				file.transferTo(destinationFile);
				imageUrls.add(ServletUriComponentsBuilder.fromCurrentContextPath().path(urlPath).path(fileName)
						.toUriString());
			} catch (IOException e) {
				throw new RuntimeException("Failed to store file " + file.getOriginalFilename(), e);
			}
		}
		return imageUrls;
	}

	private String uploadUImage(MultipartFile file, Path rootLocation, String urlPath) {
		try {
			String fileName = file.getOriginalFilename();
			Path destinationFile = rootLocation.resolve(Paths.get(fileName)).normalize().toAbsolutePath();
			file.transferTo(destinationFile);
			return ServletUriComponentsBuilder.fromCurrentContextPath().path(urlPath).path(fileName).toUriString();
		} catch (IOException e) {
			throw new RuntimeException("Failed to store file " + file.getOriginalFilename(), e);
		}
	}

	// Helper method to upload a single image
	private String uploadImage(MultipartFile file, Path rootLocation, String urlPath) {
		try {
			String fileName = file.getOriginalFilename();
			Path destinationFile = rootLocation.resolve(Paths.get(fileName)).normalize().toAbsolutePath();
			file.transferTo(destinationFile);
			return ServletUriComponentsBuilder.fromCurrentContextPath().path(urlPath).path(fileName).toUriString();
		} catch (IOException e) {
			throw new RuntimeException("Failed to store file " + file.getOriginalFilename(), e);
		}
	}

}
