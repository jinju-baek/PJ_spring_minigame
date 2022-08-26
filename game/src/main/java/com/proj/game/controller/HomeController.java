package com.proj.game.controller;

import com.proj.game.dto.UserDto;
import com.proj.game.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Slf4j
@Controller
public class HomeController {
    @Autowired
    UserService userService;

    @RequestMapping(value ="/", method = {RequestMethod.GET, RequestMethod.POST})
    public String loginPage() {
        log.trace("HomeController - loginPage >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        log.debug("HomeController - loginPage >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        log.info("HomeController - loginPage >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        log.warn("HomeController - loginPage >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        log.error("HomeController - loginPage >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        return "loginPage";
    }

    @RequestMapping(value = "/login", method = {RequestMethod.POST})
    public String login(UserDto param, Model model) {
        log.info("HomeController - login >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        log.info("userInfo : ", param);
        log.info(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        int result = userService.login(param);
        String page = "loginPage";
        if (result > 0) {
            page = "home";
        }
        return page;
    }

}
