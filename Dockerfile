FROM maven:3.6.3 AS maven

# Compile .jar
WORKDIR /usr/src/app
COPY pz-cheeseria-be/PZ-Cheeseria /usr/src/app
RUN mvn package 

FROM adoptopenjdk/openjdk11:alpine-jre

ARG JAR_FILE=PZ-Cheeseria-0.0.1-SNAPSHOT.jar
WORKDIR /opt/app
COPY --from=maven /usr/src/app/target/${JAR_FILE} /opt/app/

# Run jar
ENTRYPOINT ["java","-jar","PZ-Cheeseria-0.0.1-SNAPSHOT.jar"]