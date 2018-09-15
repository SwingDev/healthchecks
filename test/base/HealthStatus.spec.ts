import { HealthStatus } from '../../src'

describe('HealthStatus', () => {
  describe('up', () => {
    test('should return a HealthStatus instance that is healthy', () => {
      const healthStatus = HealthStatus.up()
      expect(healthStatus.healthy).toBe(true)
    })

    test('should accept a parameter that is passed to health status details', () => {
      const additionalDetails = 'An exceptional example of good health'
      const healthStatus = HealthStatus.up(additionalDetails)
      expect(healthStatus.details).toBe(additionalDetails)
    })
  })

  describe('down', () => {
    test('should return a HealthStatus instance that is not healthy', () => {
      const healthStatus = HealthStatus.down('Something really bad happened')
      expect(healthStatus.healthy).toBe(false)
    })

    test('should accept a parameter that is passed to health status details', () => {
      const error = new Error('Something bad happened')
      const healthStatus = HealthStatus.down(error)
      expect(healthStatus.details).toBe(error)
    })
  })
})
