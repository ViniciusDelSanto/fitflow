import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native"
import { colors, spacing, borderRadius, shadows } from "../theme/colors"

export default function AtletaHome({ navigation }) {
  const lastESR = 6
  const weeklyProgress = 0.8 // 80% of weekly goal

  const getESRColor = (value) => {
    if (value <= 3) return colors.danger
    if (value <= 6) return colors.warning
    return colors.success
  }

  const getESRLabel = (value) => {
    if (value <= 3) return "Baixo"
    if (value <= 6) return "Moderado"
    return "Ótimo"
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Olá, Rafael 👋</Text>
          <Text style={styles.subGreeting}>Vamos treinar hoje?</Text>
        </View>

        {/* Weekly Progress Indicator */}
        <View style={[styles.progressCard, shadows.md]}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressTitle}>Progresso Semanal</Text>
            <Text style={styles.progressValue}>4/5 treinos</Text>
          </View>
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: `${weeklyProgress * 100}%` }]} />
          </View>
          <Text style={styles.progressLabel}>80% da meta semanal concluída</Text>
        </View>

        {/* Last ESR Card */}
        <View style={[styles.lastESRCard, shadows.md]}>
          <View style={styles.lastESRHeader}>
            <Text style={styles.lastESRTitle}>Último ESR Registrado</Text>
            <View style={[styles.lastESRBadge, { backgroundColor: getESRColor(lastESR) }]}>
              <Text style={styles.lastESRValue}>{lastESR}</Text>
            </View>
          </View>
          <Text style={styles.lastESRLabel}>{getESRLabel(lastESR)} - Registrado há 2 horas</Text>
        </View>

        {/* ESR Card */}
        <View style={[styles.esrCard, { backgroundColor: getESRColor(lastESR) }]}>
          <View style={styles.esrContent}>
            <View style={styles.esrHeader}>
              <View>
                <View style={styles.esrTitleRow}>
                  <Text style={styles.esrEmoji}>❤️</Text>
                  <Text style={styles.esrTitle}>Escala Subjetiva</Text>
                </View>
                <Text style={styles.esrSubtitle}>Como você está hoje?</Text>
              </View>
              <View style={styles.esrValueContainer}>
                <Text style={styles.esrValue}>{lastESR}</Text>
                <Text style={styles.esrLabel}>{getESRLabel(lastESR)}</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.esrButton}
              onPress={() => navigation.navigate("ESRModal")}
              activeOpacity={0.8}
            >
              <Text style={styles.esrButtonText}>✨ ENVIAR ESR</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          <View style={[styles.statCard, shadows.md]}>
            <View style={[styles.statIcon, { backgroundColor: colors.primary }]}>
              <Text style={styles.statEmoji}>💪</Text>
            </View>
            <Text style={styles.statValue}>4/5</Text>
            <Text style={styles.statLabel}>Sessões Semana</Text>
          </View>
          <View style={[styles.statCard, shadows.md]}>
            <View style={[styles.statIcon, { backgroundColor: colors.success }]}>
              <Text style={styles.statEmoji}>📈</Text>
            </View>
            <Text style={styles.statValue}>342</Text>
            <Text style={styles.statLabel}>Carga Total</Text>
          </View>
        </View>

        {/* Upcoming Sessions */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Próximas Sessões</Text>
            <TouchableOpacity onPress={() => navigation.navigate("History")}>
              <Text style={styles.sectionLink}>Ver histórico →</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[styles.sessionCard, shadows.md]}
            onPress={() => navigation.navigate("SessionDetail", { sessionId: "1" })}
            activeOpacity={0.8}
          >
            <View style={styles.sessionHeader}>
              <Text style={styles.sessionTitle}>Treino Intervalado Z4</Text>
              <Text style={styles.sessionDate}>Hoje, 18:00</Text>
            </View>
            <View style={styles.sessionFooter}>
              <View style={styles.sessionBadge}>
                <Text style={styles.sessionBadgeText}>⏱️ 45 min</Text>
              </View>
              <View style={[styles.sessionBadge, { backgroundColor: colors.action + "20" }]}>
                <Text style={[styles.sessionBadgeText, { color: colors.action }]}>⚡ Zona 4</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutralBg,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  header: {
    marginBottom: spacing.lg,
    paddingTop: spacing.md,
  },
  greeting: {
    fontSize: 28,
    fontWeight: "800",
    color: colors.text,
    marginBottom: spacing.xs,
  },
  subGreeting: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  progressCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    marginBottom: spacing.md,
  },
  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.md,
  },
  progressTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text,
  },
  progressValue: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.primary,
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: colors.neutralBg,
    borderRadius: borderRadius.full,
    overflow: "hidden",
    marginBottom: spacing.sm,
  },
  progressBar: {
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: borderRadius.full,
  },
  progressLabel: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  lastESRCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    marginBottom: spacing.md,
  },
  lastESRHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.sm,
  },
  lastESRTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text,
  },
  lastESRBadge: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.md,
    justifyContent: "center",
    alignItems: "center",
  },
  lastESRValue: {
    fontSize: 18,
    fontWeight: "800",
    color: colors.white,
  },
  lastESRLabel: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  esrCard: {
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    overflow: "hidden",
  },
  esrContent: {
    gap: spacing.lg,
  },
  esrHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  esrTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    marginBottom: spacing.xs,
  },
  esrEmoji: {
    fontSize: 20,
  },
  esrTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.white,
  },
  esrSubtitle: {
    fontSize: 12,
    color: "rgba(255,255,255,0.8)",
  },
  esrValueContainer: {
    alignItems: "flex-end",
  },
  esrValue: {
    fontSize: 40,
    fontWeight: "800",
    color: colors.white,
    lineHeight: 40,
  },
  esrLabel: {
    fontSize: 12,
    color: "rgba(255,255,255,0.8)",
    marginTop: spacing.xs,
  },
  esrButton: {
    height: 52,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: borderRadius.xl,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  esrButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.white,
  },
  statsGrid: {
    flexDirection: "row",
    gap: spacing.md,
    marginBottom: spacing.lg,
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    alignItems: "center",
  },
  statIcon: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.md,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: spacing.md,
  },
  statEmoji: {
    fontSize: 24,
  },
  statValue: {
    fontSize: 24,
    fontWeight: "800",
    color: colors.text,
    marginBottom: spacing.xs,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: "center",
  },
  section: {
    marginBottom: spacing.lg,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.md,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: colors.text,
  },
  sectionLink: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.primary,
  },
  sessionCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    marginBottom: spacing.md,
  },
  sessionHeader: {
    marginBottom: spacing.md,
  },
  sessionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text,
    marginBottom: spacing.xs,
  },
  sessionDate: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  sessionFooter: {
    flexDirection: "row",
    gap: spacing.md,
  },
  sessionBadge: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    backgroundColor: colors.primary + "20",
    borderRadius: borderRadius.md,
  },
  sessionBadgeText: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.primary,
  },
})
