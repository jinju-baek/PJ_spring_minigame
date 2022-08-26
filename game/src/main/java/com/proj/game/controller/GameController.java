package com.proj.game.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class GameController {

    @ResponseBody
    @RequestMapping(value = "/game")
    public String gameClick(@RequestParam("keyword") String keyword) {
        return keyword;
    }
}
