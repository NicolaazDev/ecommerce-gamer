"use client";

import LoginForm from "@/components/loginForm";
import RegisterForm from "@/components/registerForm";
import SliderAuthPage from "@/components/ui/sliderAuthPage";

import { useState } from "react";
import { motion } from "framer-motion";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const switchToRegister = () => setIsLogin(false);
  const switchToLogin = () => setIsLogin(true);

  return (
    <div className="center min-h-screen h-screen bg-background py-4 px-4">
      <div className="w-full h-full center gap-x-4">
        <motion.div
          key={isLogin ? "login" : "register"}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.7 }}
          className="w-[50%] center"
        >
          {isLogin ? (
            <LoginForm onSwitchToRegister={switchToRegister} />
          ) : (
            <RegisterForm onSwitchToLogin={switchToLogin} />
          )}
        </motion.div>

        <SliderAuthPage isLogin={isLogin} />
      </div>
    </div>
  );
}
