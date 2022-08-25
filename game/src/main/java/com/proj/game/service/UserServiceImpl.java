package com.proj.game.service;

import com.proj.game.dao.UserDao;
import com.proj.game.dto.UserDto;
import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{

    private static final Logger log = LoggerFactory.getLogger(UserServiceImpl.class);

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
