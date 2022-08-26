package com.proj.game.service;

import com.proj.game.dao.UserDao;
import com.proj.game.dto.UserDto;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private SqlSession sqlSession;

    private UserDao userDao;

    @Autowired
    public void newUserDao() {
        userDao = sqlSession.getMapper(UserDao.class);
    }

    @Override
    public int login(UserDto param) {
        log.info("UserServiceImpl - login >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        log.info("userInfo : ", param);
        log.info(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

        int result = userDao.login(param);
        return result;
    }
}
