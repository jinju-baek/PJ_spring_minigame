package com.proj.game;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@ContextConfiguration(locations = {"file:web/WEB-INF/spring/applicationContext.xml"})
public class MybatisTests {

    private static final Logger logger = LoggerFactory.getLogger(MybatisTests.class);
    @Autowired
    private SqlSessionFactory sqlFactory;

    @Test
    public void testFactory() {
        logger.info("sqlFactory: " + sqlFactory);
    }

    @Test
    public void testSession() {
        try (SqlSession sqlSession = sqlFactory.openSession()) {
            logger.info("SqlSession: " + sqlSession);
            logger.info("성공");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
