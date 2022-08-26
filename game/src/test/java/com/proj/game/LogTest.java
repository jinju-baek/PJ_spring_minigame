package com.proj.game;

import lombok.extern.slf4j.Slf4j;
import org.junit.Test;

@Slf4j
public class LogTest {

    @Test
    public void logTest() {
        log.trace("{} test success", "trace");
        log.debug("{} test success", "debug");
        log.info("{} test success", "info");
        log.warn("{} test success", "warn");
        log.error("{} test success", "error");
    }
}
