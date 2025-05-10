package com.my_universe.mu;

import com.my_universe.mu.service.SettingAssets;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@SpringBootTest
@ExtendWith({SpringExtension.class})
public class ComponentUnitTest {

    @Autowired
    private ApplicationContext context;

    @Test
    public void givenInScopeComponents_whenSearchingInApplicationContext_thenFindThem() {
        Assertions.assertNotNull(context.getBean(SettingAssets.class));
    }
}
