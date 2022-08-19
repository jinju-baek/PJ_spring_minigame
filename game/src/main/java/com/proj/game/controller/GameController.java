package com.proj.game.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class GameController {

    @ResponseBody
    @RequestMapping(value = "/game")
    public String gameClick(@RequestParam("keyword") String keyword) {
        return keyword;
    }
}
