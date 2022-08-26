package com.proj.game;

import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

@Slf4j
@RunWith(SpringRunner.class)
@ContextConfiguration(locations = {"file:web/WEB-INF/spring/applicationContext.xml"})
public class MybatisTests {

    @Autowired
    private SqlSessionFactory sqlFactory;

    @Test
    public void testFactory() {
        log.info("sqlFactory: " + sqlFactory);
    }

    @Test
    public void testSession() {
        try (SqlSession sqlSession = sqlFactory.openSession()) {
            log.info("SqlSession: " + sqlSession);
            log.info("성공");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
