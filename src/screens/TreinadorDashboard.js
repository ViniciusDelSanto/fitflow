import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native"
import { colors, spacing, borderRadius, shadows } from "../theme/colors"

export default function TreinadorDashboard({ navigation }) {
  const athletes = [
    { id: "1", name: "Rafael Silva", age: 26, hrRep: 58, esr: 6 },
    { id: "2", name: "Júlia Santos", age: 22, hrRep: 62, esr: 4 },
    { id: "3", name: "Carlos Mendes", age: 30, hrRep: 64, esr: 8 },
  ]

  const getESRColor = (value) => {
    if (value <= 3) return colors.danger
    if (value <= 6) return colors.warning
    return colors.success
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Painel do Treinador 💪</Text>
          <Text style={styles.subGreeting}>Gerencie seus atletas</Text>
        </View>

        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          <View style={[styles.statCard, shadows.md]}>
            <View style={[styles.statIcon, { backgroundColor: colors.primary }]}>
              <Text style={styles.statEmoji}>👥</Text>
            </View>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Atletas</Text>
          </View>
          <View style={[styles.statCard, shadows.md]}>
            <View style={[styles.statIcon, { backgroundColor: colors.success }]}>
              <Text style={styles.statEmoji}>📈</Text>
            </View>
            <Text style={styles.statValue}>89%</Text>
            <Text style={styles.statLabel}>Adesão</Text>
          </View>
          <View style={[styles.statCard, shadows.md]}>
            <View style={[styles.statIcon, { backgroundColor: colors.warning }]}>
              <Text style={styles.statEmoji}>⚠️</Text>
            </View>
            <Text style={styles.statValue}>3</Text>
            <Text style={styles.statLabel}>Alertas</Text>
          </View>
        </View>

        {/* Alert Card */}
        <View style={[styles.alertCard, shadows.md]}>
          <View style={styles.alertIcon}>
            <Text style={styles.alertEmoji}>⚠️</Text>
          </View>
          <View style={styles.alertContent}>
            <Text style={styles.alertTitle}>⚠️ Atenção Necessária</Text>
            <Text style={styles.alertText}>Júlia reportou ESR baixo (4) - considere ajustar carga</Text>
          </View>
        </View>

        {/* Athletes List */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Meus Atletas</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>3 ativos</Text>
            </View>
          </View>

          {athletes.map((athlete) => (
            <TouchableOpacity
              key={athlete.id}
              style={[styles.athleteCard, shadows.md]}
              onPress={() => navigation.navigate("AthleteDetail", { athleteId: athlete.id })}
              activeOpacity={0.8}
            >
              <View style={styles.athleteAvatar}>
                <Text style={styles.athleteEmoji}>👤</Text>
              </View>
              <View style={styles.athleteInfo}>
                <Text style={styles.athleteName}>{athlete.name}</Text>
                <View style={styles.athleteStats}>
                  <Text style={styles.athleteStat}>{athlete.age} anos</Text>
                  <View style={styles.dot} />
                  <Text style={styles.athleteStat}>❤️ {athlete.hrRep} bpm</Text>
                </View>
              </View>
              <View style={[styles.esrBadge, { backgroundColor: getESRColor(athlete.esr) }]}>
                <Text style={styles.esrBadgeLabel}>ESR</Text>
                <Text style={styles.esrBadgeValue}>{athlete.esr}</Text>
              </View>
            </TouchableOpacity>
          ))}
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
  statsGrid: {
    flexDirection: "row",
    gap: spacing.md,
    marginBottom: spacing.lg,
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    padding: spacing.md,
    alignItems: "center",
  },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.md,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: spacing.sm,
  },
  statEmoji: {
    fontSize: 20,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "800",
    color: colors.text,
    marginBottom: spacing.xs,
  },
  statLabel: {
    fontSize: 11,
    color: colors.textSecondary,
    textAlign: "center",
  },
  alertCard: {
    backgroundColor: colors.warning,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    flexDirection: "row",
    gap: spacing.md,
    marginBottom: spacing.lg,
  },
  alertIcon: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.full,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  alertEmoji: {
    fontSize: 24,
  },
  alertContent: {
    flex: 1,
  },
  alertTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.white,
    marginBottom: spacing.xs,
  },
  alertText: {
    fontSize: 13,
    color: "rgba(255,255,255,0.9)",
    lineHeight: 18,
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
  badge: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    backgroundColor: colors.primary + "20",
    borderRadius: borderRadius.full,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: "600",
    color: colors.primary,
  },
  athleteCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    marginBottom: spacing.md,
  },
  athleteAvatar: {
    width: 56,
    height: 56,
    borderRadius: borderRadius.lg,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  athleteEmoji: {
    fontSize: 32,
  },
  athleteInfo: {
    flex: 1,
  },
  athleteName: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text,
    marginBottom: spacing.xs,
  },
  athleteStats: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  athleteStat: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.divider,
  },
  esrBadge: {
    width: 56,
    height: 56,
    borderRadius: borderRadius.xl,
    justifyContent: "center",
    alignItems: "center",
  },
  esrBadgeLabel: {
    fontSize: 10,
    fontWeight: "600",
    color: "rgba(255,255,255,0.8)",
  },
  esrBadgeValue: {
    fontSize: 20,
    fontWeight: "800",
    color: colors.white,
  },
})
