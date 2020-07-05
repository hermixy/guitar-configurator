#pragma once
#include <math.h>

#include <QDebug>
#include <QJSValue>
#include <QObject>
#include <QQueue>
#include <QSerialPort>
#include <QSerialPortInfo>

#include "device.h"
class DfuArduino : public Device {
    Q_OBJECT
   public:
    explicit DfuArduino(QString processor, QObject* parent = nullptr);
    QString getDescription();
    bool isReady();
    virtual void close();
    virtual bool open();
    virtual void bootloader();
    inline virtual bool isConfigurable() {
        return false;
    }
   signals:
    void descriptionChanged();
    void readyChanged();

   protected:
    QString m_processor;

   private:
    inline virtual bool isEqual(const Device& other) const {
        auto& otherD = static_cast<const DfuArduino&>(other);
        return m_processor == otherD.m_processor;
    }
};
