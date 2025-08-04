package com.my_universe.mu.validator;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;
@Aspect
@Component
public class TimeMonitorAspect {

    /*

    Join Point --> Places in your program where behaviour can be inserted.

    Point Cut --> It is an expression that selects one or more Join Points.

    Advice --> It represents any action taken by an aspect (cross-cutting) at a particular
               join point.

               Advice helps us to identify when the logic should be executed.

                                    / | \
                                   /  |  \
                                  /   |   \
                                 /    |    \
                                /     |     \
                               /      |      \
                            Before  After  Around --> Surround our join points from begin to end.
                                    / | \
                                   /  |  \
                                  /   |   \
                                 /    |    \
                                /     |     \
                            return  throws  finally


    The method must:

        Return Object

        Accept a ProceedingJoinPoint parameter

        Call proceed() to continue the intercepted method

        Optionally capture the annotation or method args

    */

    @Around("@annotation(com.my_universe.mu.annotations.TimeMonitor)")
    public Object logTime(ProceedingJoinPoint joinPoint) throws Throwable {
        long start = System.currentTimeMillis();

        Object result = joinPoint.proceed(); // continue the intercepted method

        long end = System.currentTimeMillis();
        System.out.println("Execution time of " + joinPoint.getSignature() + ": " + (end - start) + " ms");

        return result;
    }

}
