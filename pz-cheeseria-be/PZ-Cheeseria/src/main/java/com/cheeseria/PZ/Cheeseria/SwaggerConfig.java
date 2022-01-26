package com.cheeseria.PZ.Cheeseria;

import java.util.Collections;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.RestController;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

@Configuration
public class SwaggerConfig {
	@Bean
	public Docket api() {
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				.apis(RequestHandlerSelectors.withClassAnnotation(RestController.class))
				.paths(PathSelectors.any())
				.build()
				.useDefaultResponseMessages(false)
				.apiInfo(new ApiInfo("PZ Cheeseria API", "Basic API showing CRUD capabilities. \n Access the frontend on http://localhost:4200/cheese-selection", "1.0", "", null,
						"Rorie McLaughlin - rorie-mclaughlin@msn.com", "", Collections.emptyList()));
	}
}
