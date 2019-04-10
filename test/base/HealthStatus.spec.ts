import { HealthStatus } from '../../src/base/HealthStatus'

describe('HealthStatus', () => {
  describe('UP', () => {
    it('should return a HealthStatus instance that is healthy', () => {
      const healthStatus: HealthStatus = HealthStatus.UP()
      expect(healthStatus.healthy).toBe(true)
    })

    it('should accept a parameter that is passed to health status details', () => {
      const additionalDetails: string = 'An exceptional example of good health'
      const healthStatus: HealthStatus = HealthStatus.UP(additionalDetails)
      expect(healthStatus.details).toBe(additionalDetails)
    })
  })

  describe('DOWN', () => {
    it('should return a HealthStatus instance that is not healthy', () => {
      const healthStatus: HealthStatus = HealthStatus.DOWN('Something really bad happened')
      expect(healthStatus.healthy).toBe(false)
    })

    it('should accept a parameter that is passed to health status details', () => {
      const error: Error = new Error('Something bad happened')
      const healthStatus: HealthStatus = HealthStatus.DOWN(error)
      expect(healthStatus.details).toBe(error)
    })
  })
})
