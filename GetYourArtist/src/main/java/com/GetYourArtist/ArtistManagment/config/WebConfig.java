package com.GetYourArtist.ArtistManagment.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {

		// Serve images from D:/artist directory

		registry.addResourceHandler("/artist-images/**").addResourceLocations("file:/D:/artist/");

		// Serve images from D:/user directory if needed

		registry.addResourceHandler("/user-images/**").addResourceLocations("file:/D:/user/");

		// Serve images from D:/blog directory if needed

		registry.addResourceHandler("/blog-images/**").addResourceLocations("file:/D:/blog/");

	}
}