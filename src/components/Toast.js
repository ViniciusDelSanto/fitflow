"use client"

import { useEffect } from "react"
import { Text, StyleSheet, Animated } from "react-native"
import { colors, spacing, borderRadius, shadows } from "../theme/colors"

export default function Toast({ message, type = "success", visible, onHide }) {
  const opacity = new Animated.Value(0)

  useEffect(() => {
    if (visible) {
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.delay(3000),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start(() => {
        if (onHide) onHide()
      })
    }
  }, [visible])

  if (!visible) return null

  const backgroundColor = type === "error" ? colors.danger : type === "warning" ? colors.warning : colors.success

  return (
    <Animated.View style={[styles.container, { opacity, backgroundColor }, shadows.lg]}>
      <Text style={styles.emoji}>{type === "error" ? "❌" : type === "warning" ? "⚠️" : "✅"}</Text>
      <Text style={styles.message}>{message}</Text>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 60,
    left: spacing.lg,
    right: spacing.lg,
    flexDirection: "row",
    alignItems: "center",
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    gap: spacing.sm,
    zIndex: 1000,
  },
  emoji: {
    fontSize: 20,
  },
  message: {
    flex: 1,
    fontSize: 14,
    fontWeight: "600",
    color: colors.white,
  },
})
