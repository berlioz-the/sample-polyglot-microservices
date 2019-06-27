package com.berlioz.samples;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

    @RequestMapping("/")
    public Payload index() {
        try {
            Thread.sleep(100);
        } catch (Exception e) {
        }
        return new Payload("Greetings from BILL!");
    }

}