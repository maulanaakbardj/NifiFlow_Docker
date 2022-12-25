# ![image](https://user-images.githubusercontent.com/67249292/209466029-acef1ce9-3d74-476c-bcc4-695aec5d9541.png)

[Apache NiFi](https://nifi.apache.org/) is an easy to use, powerful, and reliable system to process and distribute data.

# Features
Apache NiFi was made for dataflow. It supports highly configurable directed graphs of data routing, transformation, and system mediation logic. Some of its key features include:

* Web-based user interface
   * Seamless experience for design, control, and monitoring
   * Multi-tenant user experience
* Highly configurable
  * Loss tolerant vs guaranteed delivery
  * Low latency vs high throughput
  * Dynamic prioritization
  * Flows can be modified at runtime
  * Back pressure
  * Scales up to leverage full machine capability
  * Scales out with zero-leader clustering model
* Data Provenance
  * Track dataflow from beginning to end
* Designed for extension
  * Build your own processors and more
  * Enables rapid development and effective testing
* Secure
  * SSL, SSH, HTTPS, encrypted content, etc...
  * Pluggable fine-grained role-based authentication/authorization
  * Multiple teams can manage and share specific portions of the flow

# Dataflow Apache NiFi

Example Apache NiFi implementation 
There is a `docker-compose` file for getting up and running with Apache NiFi,PostgresDB, and pgAdmin. 

## Example Dataflow Diagram
![Untitled Diagram](https://user-images.githubusercontent.com/67249292/209466508-97b207b9-6f0c-4fee-aae2-f23ff01b9c9b.jpg)

## Docker compose

*  clone this project
*  `docker-compose up -d`
