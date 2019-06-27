# Berlioz Sample - Polyglot Microservices

This is a sample application with 3 microservices:
* **WEB**: A web frontend written in Node.js,
* **APP**: A backend service written in Python,
* **BILL**: A backend service written in Java.

**WEB** is talking to **APP**, **APP** is talking to **BILL**.

![Diagram](diagram.png)

We depoy this application using Berlioz to local computer, and to the cloud as well.  

Run this example, right here, right now using Katacoda:
<script src="//katacoda.com/embed.js"></script>
<div id="katacoda-scenario-1"
    data-katacoda-id="berlioz/first-local-app"
    data-katacoda-color="004d7f"
    style="height: 600px; padding-top: 20px;"></div>


The easiest way to see it running is to follow live scenario in Katacoda: [https://www.katacoda.com/berlioz/scenarios/first-local-app](https://www.katacoda.com/berlioz/scenarios/first-local-app)